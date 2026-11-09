# Europe PMC

My solution for Europe PMC's technical assessment.

## Prerequisites

- macOS or Linux. Windows should work using
  [WSL](https://learn.microsoft.com/en-us/windows/wsl/install), but this is
  untested.
- A recent version of [mise](https://mise.jdx.dev/getting-started.html).
- A recent version of [Docker](https://docs.docker.com/get-started/get-docker/).

## Quick start

```sh
docker build -t europe-pmc .
docker run --rm -p 8080:8080 europe-pmc
```

The service is then available at <http://localhost:8080>.
