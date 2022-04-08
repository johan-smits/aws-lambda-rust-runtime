(function() {var implementors = {};
implementors["extension_trait"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"lambda_extension/events/struct.LambdaEvent.html\" title=\"struct lambda_extension::events::LambdaEvent\">LambdaEvent</a>&gt; for <a class=\"struct\" href=\"extension_trait/struct.MyExtension.html\" title=\"struct extension_trait::MyExtension\">MyExtension</a>","synthetic":false,"types":["extension_trait::MyExtension"]}];
implementors["http_trait"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://docs.rs/http/0.2.6/http/request/struct.Request.html\" title=\"struct http::request::Request\">Request</a>&lt;Body&gt;&gt; for <a class=\"struct\" href=\"http_trait/struct.MyHandler.html\" title=\"struct http_trait::MyHandler\">MyHandler</a>","synthetic":false,"types":["http_trait::MyHandler"]}];
implementors["logs_trait"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"lambda_extension/logs/struct.LambdaLog.html\" title=\"struct lambda_extension::logs::LambdaLog\">LambdaLog</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/1.60.0/alloc/alloc/struct.Global.html\" title=\"struct alloc::alloc::Global\">Global</a>&gt;&gt; for <a class=\"struct\" href=\"logs_trait/struct.MyLogsProcessor.html\" title=\"struct logs_trait::MyLogsProcessor\">MyLogsProcessor</a>","synthetic":false,"types":["logs_trait::MyLogsProcessor"]}];
implementors["runtime_trait"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/tower-service/0.3.1/tower_service/trait.Service.html\" title=\"trait tower_service::Service\">Service</a>&lt;<a class=\"struct\" href=\"lambda_runtime/types/struct.LambdaEvent.html\" title=\"struct lambda_runtime::types::LambdaEvent\">LambdaEvent</a>&lt;<a class=\"struct\" href=\"runtime_trait/struct.Request.html\" title=\"struct runtime_trait::Request\">Request</a>&gt;&gt; for <a class=\"struct\" href=\"runtime_trait/struct.MyHandler.html\" title=\"struct runtime_trait::MyHandler\">MyHandler</a>","synthetic":false,"types":["runtime_trait::MyHandler"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()