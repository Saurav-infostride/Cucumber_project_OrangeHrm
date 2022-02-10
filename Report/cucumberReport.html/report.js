$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/SauravSharma/IdeaProjects/Cucumber_Project/src/main/java/featurefiles/Add_User.feature");
formatter.feature({
  "name": "Checking the Add user functionality in the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check Add user functionality with required detail",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is logging successfully and goto homepage page",
  "keyword": "When "
});
formatter.match({
  "location": "Add_User.user_is_logging_successfully_and_goto_homepage_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is click on Admin button",
  "keyword": "And "
});
formatter.match({
  "location": "Add_User.user_is_click_on_Admin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is click on Add button",
  "keyword": "And "
});
formatter.match({
  "location": "Add_User.user_is_click_on_Add_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the User Role",
  "keyword": "And "
});
formatter.match({
  "location": "Add_User.user_selects_the_User_Role()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the Employee Name",
  "keyword": "And "
});
formatter.match({
  "location": "Add_User.user_selects_the_Employee_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username in the username text field",
  "keyword": "And "
});
formatter.match({
  "location": "Add_User.user_enters_username_in_the_username_text_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects the Status",
  "keyword": "And "
});
formatter.match({
  "location": "Add_User.user_selects_the_Status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Password in the password text field",
  "keyword": "And "
});
formatter.match({
  "location": "Add_User.user_enters_Password_in_the_password_text_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Confirm Password in the confirm password text field",
  "keyword": "And "
});
formatter.match({
  "location": "Add_User.user_enters_Confirm_Password_in_the_confirm_password_text_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the SAVE button",
  "keyword": "And "
});
formatter.match({
  "location": "Add_User.user_clicks_on_the_SAVE_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user successfully added the user",
  "keyword": "Then "
});
formatter.match({
  "location": "Add_User.user_successfully_added_the_user()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...web/index.php/admin/[saveSystemUser]\u003e but was:\u003c...web/index.php/admin/[viewSystemUsers]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat StepDefinitions.Add_User.user_successfully_added_the_user(Add_User.java:87)\r\n\tat ✽.user successfully added the user(C:/Users/SauravSharma/IdeaProjects/Cucumber_Project/src/main/java/featurefiles/Add_User.feature:14)\r\n",
  "status": "failed"
});
formatter.uri("C:/Users/SauravSharma/IdeaProjects/Cucumber_Project/src/main/java/featurefiles/Delete_User.feature");
formatter.feature({
  "name": "Checking the search add user functionality in the application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Check the search add user functionality with required detail",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is logging successfully and goto homepage page",
  "keyword": "When "
});
formatter.match({
  "location": "Add_User.user_is_logging_successfully_and_goto_homepage_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is click on Admin button",
  "keyword": "And "
});
formatter.match({
  "location": "Add_User.user_is_click_on_Admin_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Username in the Username text field for search",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user selects the user as per the enter name",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_User.user_selects_the_user_as_per_the_enter_name()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks on the Delete button",
  "keyword": "And "
});
formatter.match({
  "location": "Delete_User.user_clicks_on_the_Delete_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user is successfully Deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "Delete_User.user_is_successfully_Deleted()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("C:/Users/SauravSharma/IdeaProjects/Cucumber_Project/src/main/java/featurefiles/Forget_Password.feature");
formatter.feature({
  "name": "Check the ForgetPassword functionality link of the OrangeHrm",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Checking the ForgetPassword functionality click on the link",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the forget password link",
  "keyword": "When "
});
formatter.match({
  "location": "Forget_Password.user_clicks_on_the_forget_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirecting to the ForgetPassword page",
  "keyword": "Then "
});
formatter.match({
  "location": "Forget_Password.user_is_redirecting_to_the_ForgetPassword_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("C:/Users/SauravSharma/IdeaProjects/Cucumber_Project/src/main/java/featurefiles/Login.feature");
formatter.feature({
  "name": "Checking Login functionality of the Orange HRM",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Checking Login functionality with the valid login credentials",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "user is on Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "Login.user_is_on_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters username in the username textfield",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_username_in_the_username_textfield()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters password in the password textfield",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_enters_password_in_the_password_textfield()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the Login button",
  "keyword": "When "
});
formatter.match({
  "location": "Login.user_clicks_on_the_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is on Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "Login.user_is_on_Homepage()"
});
formatter.result({
  "status": "passed"
});
});