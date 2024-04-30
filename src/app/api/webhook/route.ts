import Stripe from "stripe";
import {headers} from 'next/headers';
import {NextResponse} from "next/server";
import {EnrollCourse, PublishCourse} from "@/app/_microservices";

const stripe = new Stripe('sk_test_51PAdj407ovt5wjWdI9B0wbdMTgh1Z0HbMWaMNT6Jg2VKyvORnZcToFurGd4Dcp0ObeglcnSz2BkoZZO5Ih3lyDn6003dLIM5ea');

const endPointSecret = 'whsec_I4KKof6w5xUrgPdEiKbTRnkTeC9Ogi1z';

export async function POST(request : any) {

    const body = await request.text();
    const headersList = headers();
    // @ts-ignore
    const sig : string = headersList.get('stripe-signature');

    let event;

    try {
        event = stripe.webhooks.constructEvent(body,sig, endPointSecret );
    } catch (error) {
        console.log(error);
        // @ts-ignore
        return NextResponse.json({error: error.message}, {status:400});
    }

    switch (event.type) {
        case "checkout.session.completed":
            const checkoutSessionCompleted = event.data.object;
            // @ts-ignore
            const id : string = checkoutSessionCompleted.metadata.productId;
            // @ts-ignore
            const email : string  = checkoutSessionCompleted.customer_details.email;
            //Meter en la base de datos
            try {
                const response = await EnrollCourse(id, email).then(async response => {
                    if (response) {
                        // @ts-ignore
                        const { createUserEnrollCourse } = response;
                        if (createUserEnrollCourse && createUserEnrollCourse.id) {
                            await PublishCourse(createUserEnrollCourse.id).then(result => {
                                console.log(result);
                            });
                        }
                    }
                });
            } catch (error) {
                console.error('Error enrolling in course:', error);
            }
            //Mandar gmail


            break;

    }
    //Hacer que lleguen los pagos a stripe
    return new Response (null, {status: 200});

}