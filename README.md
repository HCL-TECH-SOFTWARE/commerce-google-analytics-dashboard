# hcl-commerce-google-analytics-dashboard

# NOTE: This asset is compatible with pre- 9.1.4.0 release versions of HCL Commerce.  In 9.1.4.0 this integration has been productized.**


This project is created to create the analytics dashboard using google Embed API.

Steps you need for the Embed API to work

1.Enable an API for your project:

  -Open the API Library(https://console.developers.google.com/apis/library) in the Google API Console.
  
  -If prompted, select a project, or create a new one.
  
  -Select the"Google Analytics API", then click the Enable button.
  
  -If prompted, enable billing.
  
  -If prompted, read and accept the API's Terms of Service.
  
2. Create authorization credentials and get the Client ID
 
    -Go to the Credentials page(https://console.developers.google.com/apis/credentials)
    
    -Click Create credentials > OAuth client ID.
    
    -Select the Web application application type.
    
    -Complete the form. 
    
     Applications that use JavaScript to make authorized Google API requests must specify authorized JavaScript origins. 
    
    The origins identify the domains from which your application can send requests to the OAuth 2.0 server.

3.Once you succesfully created the crendentials.Get the client Id and paste it in js/index.js file

4. Run this app in localhost.


For more Information on Embed API , visit https://developers.google.com/analytics/devguides/reporting/embed/v1/getting-started
