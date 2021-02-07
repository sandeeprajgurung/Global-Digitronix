function sendEmail() {
    Email.send({
        Host : "smtp.mailtrap.com",
        Username : "sandeep@proshore.eu",
        Password : "732DCB80A606905F0C10B1323B3EF67C6EF6",
        To : 'smile2srg@gmail.com',
        From : "sandeep@proshore.eu",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
    message => alert(message)
    );
}