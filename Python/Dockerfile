# Етап збірки
FROM python:3.10-slim-bullseye AS builder
WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

RUN python -m venv /venv
COPY requirements.txt .
RUN /venv/bin/pip install --no-cache-dir -r requirements.txt

# Фінальний образ
FROM python:3.10-slim-bullseye
WORKDIR /app
LABEL author="Петро Щур"

COPY --from=builder /venv /venv
COPY . .

EXPOSE 8080
CMD ["/venv/bin/uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]