import React from 'react'
import FAQItem from './FAQItem'

const faq = [
    {
        "question": "What is your return policy?",
        "answer": "Our return policy allows customers to return items within 30 days of purchase for a full refund."
    },
    {
        "question": "How can I track my order?",
        "answer": "You can track your order by logging into your account on our website and navigating to the 'Order Status' section."
    },
    {
        "question": "Do you offer international shipping?",
        "answer": "Yes, we offer international shipping to most countries. Shipping costs and delivery times may vary depending on the destination."
    },
    {
        "question": "What payment methods do you accept?",
        "answer": "We accept Visa, Mastercard, American Express, PayPal, and bank transfers."
    },
    {
        "question": "How can I contact customer support?",
        "answer": "You can contact our customer support team by phone at 1-800-555-1234 or by email at support@example.com."
    }
]


const FAQComponts = () => {
    return (
        <div>
            {
                faq.map((faq, index) => {
                    return (
                        <FAQItem faq={faq} index={index}  key={index}/>
                    )
                })
            }
        </div>
    )
}

export default FAQComponts