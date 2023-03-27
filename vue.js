let app = Vue.createApp({

data () {

    return {

        message: "Thank you for your Purchese!",

        image: 'https://www.frankbody.com/eu/wp-content/uploads/2018/08/OLD_frank-body-mega-complexion-crew-kit_DOT.COM_VESSEL-1.jpg',

        shippingTime: 5,

        premium: false,

        details: ['★ Hyaluronic Acid Serum ', '★ Roseship Body Oil', '★ Original Face Scrub'],

        cart: 0,

        variants: [
            { id: 2234, color: 'gray', image: "https://www.frankbody.com/eu/wp-content/uploads/2021/12/frank-body-everyday-a-clearing-body-wash_DOT.COM_VESSEL.jpg" },
            { id: 2235, color: 'pink', image: "https://www.frankbody.com/eu/wp-content/uploads/2021/03/frank-body-brightening-eye-serum_DOT.COM_VESSEL.jpg" }
          ],

          update(variantImage) {
            this.image = variantImage
        },
    }

}

})

alert("This website was made by Leah Hannah for TwinInformatics using the Vue Framework.");