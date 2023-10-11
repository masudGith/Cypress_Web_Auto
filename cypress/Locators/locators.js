class locatorsPage {
  /******************************************
     *  Log in locator *
     * ****************************************/

  login = '//*[@id="login2"]'
  userName = '//*[@id="loginusername"]'
  password = '//*[@id="loginpassword"]'
  login_button = '//*[@id="logInModal"]/div/div/div[3]/button[2]'

  /******************************************
     *  add to cart & purchase order  *
     * ****************************************/
  verify_CATEGORIES = '//a[@id="cat"]'
  laptop = '//a[3]'
  Sony_vaio_i5 = '//a[normalize-space()="Sony vaio i5"]'
  verify_Sony_vaio_i5 = '//h2[normalize-space()="Sony vaio i5"]'
  verify_prize = '//h3[@class="price-container"]'
  add_to_cart = '//*[@id="tbodyid"]/div[2]/div/a'
  delete_from_cart = '//a[normalize-space()="Delete"]'
  verify_cart_list = '//a[@id="cartur"]'
  place_order = '//button[normalize-space()="Place Order"]'
  user_name = '//input[@id="name"]'
  user_country = '//input[@id="country"]'
  user_city = '//input[@id="city"]'
  user_credit_card = '//input[@id="card"]'
  user_month = '//input[@id="month"]'
  user_year = '//input[@id="year"]'
  purchase = '//button[normalize-space()="Purchase"]'
  Order_Purchase_successfully_popup = '//h2[normalize-space()="Thank you for your purchase!"]'
  ok_popup = '//button[normalize-space()="OK"]'

  /******************************************
     * make a contact  *
     * ****************************************/

  contact = '//a[normalize-space()="Contact"]'
  contact_email = '//input[@id="recipient-email"]'
  contact_name = '//input[@id="recipient-name"]'
  contact_message = '//textarea[@id="message-text"]'
  send_message = '//button[normalize-space()="Send message"]'

  /******************************************
     * about us *
     * ****************************************/
   about_us = '//a[normalize-space()="About us"]'
   vedio_play_buttion = '//button[@title="Play Video"]//span[@class="vjs-icon-placeholder"]'
   fullscreen_icon = "//button[@title='Non-Fullscreen']"
   non_fullscreen_icon = '//button[@title="Non-Fullscreen"]//span[@class="vjs-icon-placeholder"]'
   welcome_admin_popup = "//a[@id='nameofuser']"

   /******************************************
     * File Uploader *
     * ****************************************/
   choose_file = '//input[@id="file-upload"]'
   upload_file = '//input[@id="file-submit"]'
   File_Uploaded_Popup = "//h3[normalize-space()='File Uploaded!']"

  

  



}
export default locatorsPage;