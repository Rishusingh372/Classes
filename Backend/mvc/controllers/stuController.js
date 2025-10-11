const homepage = ("/home", (req, res) => {
   res.render('home')
})

const aboutpage = ("/about", (req, res) => {
   res.render('about')
})
const servicepage = ("/service", (req, res) => {
   res.render('service')
});
const joinpage = ("/join", (req, res) => {
   res.render('join')
});
const contactpage = ("/contact", (req, res) => {
   res.render('contact')
});

module.exports = {
   homepage,
   aboutpage,
   servicepage,
   joinpage,
   contactpage
}