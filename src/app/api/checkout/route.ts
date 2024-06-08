import {NextResponse} from "next/server";
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51PAdj407ovt5wjWdI9B0wbdMTgh1Z0HbMWaMNT6Jg2VKyvORnZcToFurGd4Dcp0ObeglcnSz2BkoZZO5Ih3lyDn6003dLIM5ea');

export async function POST(request: any) {

    const course = await request.json();
    //console.log(course);

    const session = await stripe.checkout.sessions.create({
        success_url: `${process.env.URL}/view-course/${course.id}`,
        line_items: [
            {
                price_data: {
                    currency: "eur",
                    product_data: {
                        name: course.name,
                        images: [course?.banner?.url]
                    },
                    unit_amount: 399
                },
                quantity: 1
            },
        ],
        metadata: {
            productId: course.id
        },
        mode: 'payment',
    });

    //console.log(session);

    return NextResponse.json(session)
}