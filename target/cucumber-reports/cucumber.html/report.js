$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri(" login.feature");
formatter.feature({
  "name": "Login to an e-commerce website",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify users can login to portal with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits e-commerce website",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters valid \"\u003cemail\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User can logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "testuser412@grr.la",
        "2t8zmqzL"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify users can login to portal with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User visits e-commerce website",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.user_visits_e_commerce_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters valid \"testuser412@grr.la\" and valid \"2t8zmqzL\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitions.user_enters_valid_credentials(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.user_can_logged_in_successfully()"
});
formatter.result({
  "status": "passed"
});
});