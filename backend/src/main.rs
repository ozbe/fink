use serde_json::Value;
use lambda::{handler_fn, Context};
use log::debug;
use serde::{Deserialize, Serialize};

type Error = Box<dyn std::error::Error + Sync + Send + 'static>;

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct Request {
    #[serde(default)]
    body: Option<String>,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct Response {
    status_code: u16,
    body: Option<String>,
}

#[tokio::main]
async fn main() -> Result<(), Error> {
    pretty_env_logger::init();
    lambda::run(handler_fn(echo)).await?;
    Ok(())
}

async fn echo(event: Value, _: Context) -> Result<Response, Error> {
    debug!("event: {}", event);
    let request: Request = serde_json::from_value(event)?;

    Ok(Response {
        status_code: 200,
        body: request.body,
    })
}