FROM python:3.10-alpine AS builder
WORKDIR /app

RUN apk add --no-cache gcc musl-dev python3-dev
RUN python -m venv /venv
COPY requirements.txt .
RUN /venv/bin/pip install --no-cache-dir -r requirements.txt

FROM python:3.10-alpine
WORKDIR /app
LABEL author="Петро Щур"

COPY --from=builder /venv /venv
COPY . .

EXPOSE 8080
CMD ["/venv/bin/uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]