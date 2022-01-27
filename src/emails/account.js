const sgMail = require ('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'pateljaydeep651@gmail.com',
        subject: 'Thanks for joining!!',
        text: `Welcome to the App, ${name}. Let me know how you get along with the app`
        
    })
}

const sendCancelationEmail = (email, name) =>{

    sgMail.send({
        to: email,
        from: 'pateljaydeep651@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
    
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// sgMail.send({
//     to: 'pateljaydeep651@gmail.com',
//     from: 'pateljaydeep651@gmail.com',
//     subject: 'This is my first creation!!',
//     text: 'I hope this mail gets to you.'
// })