FROM python:3.10-alpine AS builder
WORKDIR /app

# Встановлюємо всі необхідні залежності для збірки numpy
RUN apk add --no-cache \
    gcc \
    g++ \
    musl-dev \
    python3-dev \
    openblas-dev \
    make \
    libc-dev \
    linux-headers

# Створюємо віртуальне оточення
RUN python -m venv /venv

# Копіюємо та встановлюємо залежності
COPY requirements.txt .
RUN /venv/bin/pip install --no-cache-dir -r requirements.txt

# Фінальний образ
FROM python:3.10-alpine
WORKDIR /app
LABEL author="Петро Щур"

# Копіюємо віртуальне оточення та код
COPY --from=builder /venv /venv
COPY . .

EXPOSE 8080
CMD ["/venv/bin/uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]