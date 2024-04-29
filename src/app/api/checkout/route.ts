import {NextResponse} from "next/server";
import Stripe from "stripe";

const stripe = new Stripe('sk_test_51PAdj407ovt5wjWdI9B0wbdMTgh1Z0HbMWaMNT6Jg2VKyvORnZcToFurGd4Dcp0ObeglcnSz2BkoZZO5Ih3lyDn6003dLIM5ea');

export function POST  (request: any) {

    const session = await stripe.checkout.sessions.create({
        success_url: 'https://localhost:3000/success',
        line_items: [
            {
                price_data: {
                    currency: "eur",
                    product_data: {
                        name: "Camiseta",
                        images: ["https://i.ingur.com/EHyR2np.png"]
                    }
                },
            },
        ],
        mode: 'payment',
    });

    return NextResponse.json("Pagando producto")
}