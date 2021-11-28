var searchIndex = JSON.parse('{\
"lambda_http":{"doc":"Enriches the <code>lambda</code> crate with <code>http</code> types targeting AWS ALB…","t":[3,13,4,3,13,16,16,8,8,6,3,16,3,13,11,11,11,11,11,11,11,11,11,11,11,11,11,11,10,11,12,11,11,11,11,12,11,11,11,11,11,11,11,12,11,11,11,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,11,11,12,11,11,11,11,11,11,11,10,11,12,11,11,11,11,11,11,11,11,11,11,0,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,13,4,8,13,11,11,11,11,11,11,10,10,10,10,11,10,11,11,11,11,10,10,12,12,13,3,13,3,13,3,3,3,3,4,12,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,11,11,11,11,11,11,11,11,11,11,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,5,5,12,12,12,11,11,11,11,11,11,11,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,12,12,12,12,12,12],"n":["Adapter","Binary","Body","Context","Empty","Error","Fut","Handler","IntoResponse","Request","Response","Response","StrMap","Text","as_ref","body","body_mut","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","builder","call","call","client_context","clone","clone","clone_into","clone_into","deadline","default","default","default","default","deref","deserialize","deserialize","env_config","eq","eq","eq","ext","extensions","extensions_mut","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from","from","from","from","from","from","from_parts","get","get_all","handler","headers","headers_mut","identity","into","into","into","into","into","into_body","into_parts","into_response","into_response","invoked_function_arn","is_empty","is_end_stream","iter","map","ne","ne","ne","new","poll_data","poll_trailers","request","request_id","serialize","serialize","size_hint","status","status_mut","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","version","version_mut","with_config","xray_trace_id","0","0","Json","PayloadError","RequestExt","WwwFormUrlEncoded","borrow","borrow_mut","fmt","fmt","from","into","path_parameters","payload","query_string_parameters","request_context","source","stage_variables","to_string","try_from","try_into","type_id","with_path_parameters","with_query_string_parameters","0","0","Alb","AlbRequestContext","ApiGateway","ApiGatewayRequestContext","ApiGatewayV2","ApiGatewayV2RequestContext","Elb","Http","Identity","RequestContext","access_key","account_id","account_id","account_id","api_id","api_id","api_key","authorizer","authorizer","borrow","borrow","borrow","borrow","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","borrow_mut","caller","clone","clone","clone","clone","clone","clone","clone","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","clone_into","cognito_authentication_provider","cognito_authentication_type","cognito_identity_id","cognito_identity_pool_id","default","default","default","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","deserialize","domain_name","domain_prefix","elb","fmt","fmt","fmt","fmt","fmt","fmt","fmt","from","from","from","from","from","from","from","from_reader","from_str","http","http_method","identity","into","into","into","into","into","into","into","method","path","protocol","request_id","request_id","resource_id","resource_path","route_key","source_ip","source_ip","stage","stage","target_group_arn","time","time_epoch","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_from","try_from","try_from","try_into","try_into","try_into","try_into","try_into","try_into","try_into","type_id","type_id","type_id","type_id","type_id","type_id","type_id","user","user_agent","user_agent","user_arn","0","0","0"],"q":["lambda_http","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","lambda_http::Body","","lambda_http::ext","","","","","","","","","","","","","","","","","","","","","","lambda_http::ext::PayloadError","","lambda_http::request","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","lambda_http::request::RequestContext","",""],"d":["Exists only to satisfy the trait cover rule for …","A body containing binary data","Representation of http request and response bodies as …","The Lambda function execution context. The values in this …","An empty body","The type of Error that this Handler will return","The type of Future this Handler will return","Functions serving as ALB and API Gateway REST and HTTP API …","A conversion of self into a <code>Response&lt;Body&gt;</code> for various …","Type alias for <code>http::Request</code>s with a fixed <code>Body</code> type","Represents an HTTP response","The type of Response this Handler will return","A read-only view into a map of string data which may …","A body containing string data","","Returns a reference to the associated HTTP body.","Returns a mutable reference to the associated HTTP body.","","","","","","","","","","","Creates a new builder-style object to manufacture a …","Function used to execute handler behavior","","The client context object sent by the AWS mobile SDK. This …","","","","","The execution deadline for the current invocation in …","","","","","","","","Lambda function configuration from the local environment …","","","","Extension methods for <code>http::Request</code> types","Returns a reference to the associated extensions.","Returns a mutable reference to the associated extensions.","","","","","","","","","","","","","","","","","","Creates a new <code>Response</code> with the given head and body","Return a named value where available. If there is more …","Return all values associated with name where available","Adapts a <code>Handler</code> to the <code>lambda_runtime::run</code> interface","Returns a reference to the associated header field map.","Returns a mutable reference to the associated header field …","The Cognito identity that invoked the function. This field …","","","","","","Consumes the response, returning just the body.","Consumes the response returning the head and body parts.","Return a translation of <code>self</code> into a <code>Response&lt;Body&gt;</code>","","The ARN of the Lambda function being invoked.","Return true if the underlying map is empty","","Return an iterator over keys and values","Consumes the response returning a new response with body …","","","","Creates a new blank <code>Response</code> with the body","","","ALB and API Gateway request adaptations","The AWS request ID generated by the Lambda service.","","","","Returns the <code>StatusCode</code>.","Returns a mutable reference to the associated <code>StatusCode</code>.","","","","","","","","","","","","","","","","","","","Returns a reference to the associated version.","Returns a mutable reference to the associated version.","Add environment details to the context by setting …","The X-Ray trace ID for the current invocation.","","","Returned when <code>application/json</code> bodies fail to deserialize …","Request payload deserialization errors","Extentions for <code>lambda_http::Request</code> structs that provide …","Returned when <code>application/x-www-form-urlencoded</code> bodies …","","","","","","","Return pre-extracted path parameters, parameter provided …","Return the Result of a payload parsed into a serde …","Return pre-parsed http query string parameters, parameters …","Return request context data assocaited with the ALB or API …","","Return stage variables associated with the API gateway …","","","","","Configures instance with path parameters under #[cfg(test)]…","Configures instance with query string parameters under #[…","","","ALB request context","Elastic load balancer context information","API Gateway request context","See context-variable-reference for more detail.","API Gateway v2 request context","See context-variable-reference for more detail.","Elastic load balancer context information","Http information captured API Gateway v2 request context","Identity assoicated with API Gateway request","Event request context as an enumeration of request contexts","Undocumented. Can be the API key ID associated with an API …","The API owner’s AWS account ID.","The API owner’s AWS account ID.","The AWS account ID associated with the request.","The identifier API Gateway assigns to your API.","The identifier API Gateway assigns to your API.","For API methods that require an API key, this variable is …","The stringified value of the specified key-value pair of …","The stringified value of the specified key-value pair of …","","","","","","","","","","","","","","","The principal identifier of the caller making the request.","","","","","","","","","","","","","","","A comma-separated list of the Amazon Cognito …","The Amazon Cognito authentication type of the caller …","The Amazon Cognito identity ID of the caller making the …","The Amazon Cognito identity pool ID of the caller making …","","","","","","","","","","","The full domain name used to invoke the API. This should …","The first label of the $context.domainName. This is often …","Elastic load balancer context information","","","","","","","","","","","","","","","Deserializes a <code>Request</code> from a <code>Read</code> impl providing JSON …","Deserializes a <code>Request</code> from a string of JSON text.","The HTTP method used.","The HTTP method used. Valid values include: DELETE, GET, …","Cofnito identity information","","","","","","","","The HTTP method used. Valid values include: DELETE, GET, …","The request path. For example, for a non-proxy request URL …","The request protocol, for example, HTTP/1.1.","The ID that API Gateway assigns to the API request.","The ID that API Gateway assigns to the API request.","The identifier that API Gateway assigns to your resource.","The path to your resource. For example, for the non-proxy …","Undocumented, could be resourcePath","The source IP address of the TCP connection making the …","The source IP address of the TCP connection making the …","The deployment stage of the API request (for example, Beta …","The deployment stage of the API request (for example, Beta …","AWS ARN identifier for the ELB Target Group this lambda …","Undocumented, could be requestTime","Undocumented, could be requestTimeEpoch","","","","","","","","","","","","","","","","","","","","","","","","","","","","","The principal identifier of the user making the request. …","The User-Agent header of the API caller.","The User-Agent header of the API caller.","The Amazon Resource Name (ARN) of the effective user …","","",""],"i":[0,1,0,0,1,2,2,0,0,0,0,2,0,1,1,3,3,4,1,5,3,6,4,1,5,3,6,3,2,4,6,5,6,5,6,6,1,5,3,6,1,5,6,6,1,5,6,0,3,3,1,5,3,6,4,1,1,1,1,1,1,1,1,5,5,3,6,3,5,5,0,3,3,6,4,1,5,3,6,3,3,7,3,6,5,3,5,3,1,5,6,3,3,3,0,6,1,6,3,3,3,5,6,4,1,5,3,6,6,4,1,5,3,6,4,1,5,3,6,3,3,6,6,8,9,10,0,0,10,10,10,10,10,10,10,11,11,11,11,10,11,10,10,10,10,11,11,12,13,14,0,14,0,14,0,0,0,0,0,15,16,17,15,16,17,15,16,17,16,17,18,14,19,20,15,16,17,18,14,19,20,15,15,16,17,18,14,19,20,15,16,17,18,14,19,20,15,15,15,15,15,19,20,15,16,17,18,14,19,20,15,16,16,18,16,17,18,14,19,20,15,16,17,18,14,19,20,15,0,0,16,17,17,16,17,18,14,19,20,15,20,20,20,16,17,17,17,16,20,15,16,17,19,16,16,16,17,18,14,19,20,15,16,17,18,14,19,20,15,16,17,18,14,19,20,15,16,17,18,14,19,20,15,15,20,15,15,21,22,23],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["builder",3]],[[["request",6],["context",3]]],[[["request",6],["context",3]]],null,[[]],[[],["context",3]],[[]],[[]],null,[[]],[[],["strmap",3]],[[],["response",3]],[[],["context",3]],[[]],[[],[["result",4,["strmap"]],["strmap",3]]],[[],[["context",3],["result",4,["context"]]]],null,[[["body",4]],["bool",15]],[[["strmap",3]],["bool",15]],[[["context",3]],["bool",15]],null,[[],["extensions",3]],[[],["extensions",3]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],[["result",4,["error"]],["error",3]]],[[["formatter",3]],[["result",4,["error"]],["error",3]]],[[]],[[]],[[]],[[["str",15]]],[[]],[[["string",3]]],[[["cow",4,["str"]],["str",15]],["body",4]],[[["cow",4]],["body",4]],[[["vec",3,["u8"]],["u8",15]]],[[]],[[["hashmap",3,["string","vec"]],["string",3],["vec",3,["string"]]]],[[]],[[]],[[["parts",3]],["response",3]],[[["str",15]],[["str",15],["option",4,["str"]]]],[[["str",15]],[["vec",3,["str"]],["option",4,["vec"]]]],[[["handler",8]],[["adapter",3],["handler",8]]],[[],["headermap",3]],[[],["headermap",3]],null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[["body",4],["response",3,["body"]]]],[[],[["body",4],["response",3,["body"]]]],null,[[],["bool",15]],[[],["bool",15]],[[],["strmapiter",3]],[[],["response",3]],[[["body",4]],["bool",15]],[[["strmap",3]],["bool",15]],[[["context",3]],["bool",15]],[[],["response",3]],[[["pin",3,["response"]],["response",3],["context",3]],[["poll",4,["option"]],["option",4,["result"]]]],[[["pin",3,["response"]],["response",3],["context",3]],[["poll",4,["result"]],["result",4,["option"]]]],null,null,[[],["result",4]],[[],["result",4]],[[],["sizehint",3]],[[],["statuscode",3]],[[],["statuscode",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[["headervalue",3],["headermap",3,["headervalue"]]],[["context",3],["result",4,["context"]]]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["version",3]],[[],["version",3]],[[["config",3]],["context",3]],null,null,null,null,null,null,null,[[]],[[]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[],["strmap",3]],[[],[["result",4,["option","payloaderror"]],["option",4],["payloaderror",4]]],[[],["strmap",3]],[[],["requestcontext",4]],[[],[["error",8],["option",4,["error"]]]],[[],["strmap",3]],[[],["string",3]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,[[],["apigatewayv2requestcontext",3]],[[],["apigatewayrequestcontext",3]],[[],["albrequestcontext",3]],[[],["requestcontext",4]],[[],["elb",3]],[[],["http",3]],[[],["identity",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,[[],["elb",3]],[[],["http",3]],[[],["identity",3]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],null,null,null,[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],[["request",6],["jsonerror",3],["result",4,["request","jsonerror"]]]],[[["str",15]],[["request",6],["jsonerror",3],["result",4,["request","jsonerror"]]]],null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,null,null,null,null,null,null],"p":[[4,"Body"],[8,"Handler"],[3,"Response"],[3,"Adapter"],[3,"StrMap"],[3,"Context"],[8,"IntoResponse"],[13,"Text"],[13,"Binary"],[4,"PayloadError"],[8,"RequestExt"],[13,"Json"],[13,"WwwFormUrlEncoded"],[4,"RequestContext"],[3,"Identity"],[3,"ApiGatewayV2RequestContext"],[3,"ApiGatewayRequestContext"],[3,"AlbRequestContext"],[3,"Elb"],[3,"Http"],[13,"ApiGatewayV2"],[13,"ApiGateway"],[13,"Alb"]]},\
"lambda_runtime":{"doc":"The mechanism available for defining a Lambda function is …","t":[3,3,6,16,16,8,3,11,11,11,11,11,11,10,11,12,11,11,11,11,11,11,12,11,11,11,11,12,12,11,11,11,11,11,11,11,11,11,12,5,12,11,11,11,12,12,12,12,11,11,12,5,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,12,11,12],"n":["Config","Context","Error","Error","Fut","Handler","HandlerFn","borrow","borrow","borrow","borrow_mut","borrow_mut","borrow_mut","call","call","client_context","clone","clone","clone","clone_into","clone_into","clone_into","deadline","default","default","deserialize","deserialize","endpoint","env_config","eq","eq","fmt","fmt","fmt","from","from","from","from_env","function_name","handler_fn","identity","into","into","into","invoked_function_arn","log_group","log_stream","memory","ne","ne","request_id","run","serialize","serialize","to_owned","to_owned","to_owned","try_from","try_from","try_from","try_from","try_into","try_into","try_into","type_id","type_id","type_id","version","with_config","xray_trace_id"],"q":["lambda_runtime","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["Configuration derived from environment variables.","The Lambda function execution context. The values in this …","Error type that lambdas may result in","Errors returned by this handler.","Response of this handler.","A trait describing an asynchronous function <code>A</code> to <code>B</code>.","A <code>Handler</code> implemented by a closure.","","","","","","","Handle the incoming event.","","The client context object sent by the AWS mobile SDK. This …","","","","","","","The execution deadline for the current invocation in …","","","","","The host and port of the runtime API.","Lambda function configuration from the local environment …","","","","","","","","","Attempts to read configuration from environment variables.","The name of the function.","Returns a new <code>HandlerFn</code> with the given closure.","The Cognito identity that invoked the function. This field …","","","","The ARN of the Lambda function being invoked.","The name of the Amazon CloudWatch Logs group for the …","The name of the Amazon CloudWatch Logs stream for the …","The amount of memory available to the function in MB.","","","The AWS request ID generated by the Lambda service.","Starts the Lambda Rust runtime and begins polling for …","","","","","","","","","","","","","","","","The version of the function being executed.","Add environment details to the context by setting …","The X-Ray trace ID for the current invocation."],"i":[0,0,0,1,1,0,0,2,3,4,2,3,4,1,4,2,2,3,4,2,3,4,2,2,3,2,3,3,2,2,3,2,3,4,2,3,4,3,3,0,2,2,3,4,2,3,3,3,2,3,2,0,2,3,2,3,4,2,2,3,4,2,3,4,2,3,4,3,2,2],"f":[null,null,null,null,null,null,null,[[]],[[]],[[]],[[]],[[]],[[]],[[["context",3]]],[[["context",3]]],null,[[],["context",3]],[[],["config",3]],[[],["handlerfn",3]],[[]],[[]],[[]],null,[[],["context",3]],[[],["config",3]],[[],["result",4]],[[],["result",4]],null,null,[[["context",3]],["bool",15]],[[["config",3]],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[]],[[]],[[],[["result",4,["error"]],["error",6]]],null,[[],["handlerfn",3]],null,[[]],[[]],[[]],null,null,null,null,[[["context",3]],["bool",15]],[[["config",3]],["bool",15]],null,[[]],[[],["result",4]],[[],["result",4]],[[]],[[]],[[]],[[["headermap",3]],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[],["typeid",3]],[[],["typeid",3]],null,[[["config",3]]],null],"p":[[8,"Handler"],[3,"Context"],[3,"Config"],[3,"HandlerFn"]]}\
}');
if (window.initSearch) {window.initSearch(searchIndex)};