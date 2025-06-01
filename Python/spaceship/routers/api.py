from fastapi import APIRouter
import numpy as np

router = APIRouter()

@router.get("/matrix-multiplication")
def multiply_matrices():
    # Генеруємо дві матриці 10x10 з випадковими значеннями (0-1)
    matrix_a = np.random.rand(10, 10).round(2).tolist()
    matrix_b = np.random.rand(10, 10).round(2).tolist()
    # Перемножуємо матриці
    product = np.matmul(matrix_a, matrix_b).round(2).tolist()
    
    return {
        "matrix_a": matrix_a,
        "matrix_b": matrix_b,
        "product": product
    }