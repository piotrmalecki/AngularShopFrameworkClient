declare module oauthSignature {


   function generate(httpMethod, url, parameters, consumerSecret, tokenSecret, options): string;
}

//declare function generate(httpMethod, url, parameters, consumerSecret, tokenSecret, options): any;