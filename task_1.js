'use strict'

function Client () {
  let phoneNumber
  let password
  let email
  let creditCardNumber

  function enter (phone, pass) {
    phoneNumber = phone
    password = pass
    // console.log(phoneNumber, password)
  }

  function mailbox (mail) {
    email = mail
    // console.log(email)
  }

  function bankAccount (card) {
    creditCardNumber = card
    // console.log(creditCardNumber)
  }

  const privateData = {
    login: enter,
    email: mailbox,
    creditCardNumber: bankAccount
  }

  return privateData
}

const tom = new Client()
tom.login(30635435445, 'N2fji*jlkj')
tom.email('stone@gmail.com')
tom.creditCardNumber(4234143269459384)
