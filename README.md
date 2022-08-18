# hcl-commerce-google-analytics-dashboard

## WARRANTY & SUPPORT 
HCL Software provides HCL Commerce open source assets “as-is” without obligation to support them nor warranties or any kind, either express or implied, including the warranty of title, non-infringement or non-interference, and the implied warranties and conditions of merchantability and fitness for a particular purpose. HCL Commerce open source assets are not covered under the HCL Commerce master license nor Support contracts.

If you have questions or encounter problems with an HCL Commerce open source asset, please open an issue in the asset's GitHub repository. For more information about [GitHub issues](https://docs.github.com/en/issues), including creating an issue, please refer to [GitHub Docs](https://docs.github.com/en). The HCL Commerce Innovation Factory Team, who develops HCL Commerce open source assets, monitors GitHub issues and will do their best to address them. 

## HCLC Google-Analytics Dashoboard Asset

# NOTE: This functionality has been included in the product from release 9.1.4.0 and beyond. This asset applies to 9.1.1.0 - 9.1.3.0 only.

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
