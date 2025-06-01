FROM python:3.10-slim-bullseye
WORKDIR /app
LABEL author="Петро Щур"

# Створення віртуального оточення
RUN python -m venv /venv

# Копіювання та встановлення залежностей
COPY requirements.txt .
RUN /venv/bin/pip install --no-cache-dir -r requirements.txt

# Копіювання коду
COPY . .

EXPOSE 8080
CMD ["/venv/bin/uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]