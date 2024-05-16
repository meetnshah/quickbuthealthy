from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

meals = [
    {
        "id": 1,
        "name": "Bhaji",
        "description": "Aromatic and flavorful Bhaji.",
        "price": 150,
        "image": "bhaji-edited.jpg",
        "quantity": 1,
        "how_to_cook": "Place the pouch in a pot of boiling water for 5 mins, remove contents from the pouch and heat in a pan till warm. Microwave: Remove contents from the pouch and heat in a microwave-safe dish for about 3 mins on high.",
        "pack_volume": "300g",
        "serving_size": "2 servings (150g each)",
        "energy": 137 * 2,
        "protein": 3.0 * 2,
        "carbohydrates": 14.67 * 2,
        "total_sugars": 3.73 * 2,
        "added_sugars": 0,
        "total_fat": 7.0 * 2,
        "saturated_fat": 1.0 * 2,
        "trans_fat": 0,
        "cholesterol": 0,
        "sodium": 529.33 * 2,
        "ingredients": "Potatoes, peas, tomatoes, onions, spices, vegetable oil, salt"
    },
    {
        "id": 2,
        "name": "Veg Biryani",
        "description": "Delicious rice dish with mixed vegetables.",
        "price": 150,
        "image": "veg-biryani.jpg",
        "quantity": 1,
        "how_to_cook": "Place the pouch in a pot of boiling water for 5 mins, remove contents from the pouch and heat in a pan till warm. Microwave: Remove contents from the pouch and heat in a microwave-safe dish for about 3 mins on high.",
        "pack_volume": "300g",
        "serving_size": "2 servings (150g each)",
        "energy": 197 * 2,
        "protein": 3.87 * 2,
        "carbohydrates": 25.67 * 2,
        "total_sugars": 5.33 * 2,
        "added_sugars": 0,
        "total_fat": 7.67 * 2,
        "saturated_fat": 1.67 * 2,
        "trans_fat": 0,
        "cholesterol": 0,
        "sodium": 339.33 * 2,
        "ingredients": "Basmati rice, mixed vegetables, spices, saffron, vegetable oil, salt"
    },
    {
        "id": 3,
        "name": "Chole",
        "description": "Delicious chickpeas in a rich gravy.",
        "price": 150,
        "image": "chole-edited.jpg",
        "quantity": 1,
        "how_to_cook": "Place the pouch in a pot of boiling water for 5 mins, remove contents from the pouch and heat in a pan till warm. Microwave: Remove contents from the pouch and heat in a microwave-safe dish for about 3 mins on high.",
        "pack_volume": "300g",
        "serving_size": "2 servings (150g each)",
        "energy": 213 * 2,
        "protein": 7.87 * 2,
        "carbohydrates": 24.0 * 2,
        "total_sugars": 3.73 * 2,
        "added_sugars": 0,
        "total_fat": 9.67 * 2,
        "saturated_fat": 0.67 * 2,
        "trans_fat": 0,
        "cholesterol": 0,
        "sodium": 580 * 2,
        "ingredients": "Chickpeas, tomatoes, onions, spices, vegetable oil, salt"
    },
    {
        "id": 4,
        "name": "Dal Makhani",
        "description": "Creamy lentils in a rich gravy.",
        "price": 150,
        "image": "daal-makhni-edited.jpg",
        "quantity": 1,
        "how_to_cook": "Place the pouch in a pot of boiling water for 5 mins, remove contents from the pouch and heat in a pan till warm. Microwave: Remove contents from the pouch and heat in a microwave-safe dish for about 3 mins on high.",
        "pack_volume": "300g",
        "serving_size": "2 servings (150g each)",
        "energy": 174 * 2,
        "protein": 5.33 * 2,
        "carbohydrates": 16.67 * 2,
        "total_sugars": 4.33 * 2,
        "added_sugars": 0,
        "total_fat": 9.0 * 2,
        "saturated_fat": 1.67 * 2,
        "trans_fat": 0,
        "cholesterol": 0,
        "sodium": 374 * 2,
        "ingredients": "Black lentils, kidney beans, tomatoes, cream, spices, vegetable oil, salt"
    },
    {
        "id": 5,
        "name": "Veg Kolhapuri",
        "description": "Spicy mixed vegetable curry.",
        "price": 150,
        "image": "veg-kohlapuri.jpg",
        "quantity": 1,
        "how_to_cook": "Place the pouch in a pot of boiling water for 5 mins, remove contents from the pouch and heat in a pan till warm. Microwave: Remove contents from the pouch and heat in a microwave-safe dish for about 3 mins on high.",
        "pack_volume": "300g",
        "serving_size": "2 servings (150g each)",
        "energy": 154 * 2,
        "protein": 3.33 * 2,
        "carbohydrates": 19.0 * 2,
        "total_sugars": 6.67 * 2,
        "added_sugars": 0,
        "total_fat": 6.67 * 2,
        "saturated_fat": 1.0 * 2,
        "trans_fat": 0,
        "cholesterol": 0,
        "sodium": 720 * 2,
        "ingredients": "Mixed vegetables, tomatoes, onions, spices, vegetable oil, salt"
    },
    {
        "id": 6,
        "name": "Navratan Korma",
        "description": "Rich and creamy mixed vegetable curry.",
        "price": 150,
        "image": "korma-edited.jpg",
        "quantity": 1,
        "how_to_cook": "Place the pouch in a pot of boiling water for 5 mins, remove contents from the pouch and heat in a pan till warm. Microwave: Remove contents from the pouch and heat in a microwave-safe dish for about 3 mins on high.",
        "pack_volume": "300g",
        "serving_size": "2 servings (150g each)",
        "energy": 110 * 2,
        "protein": 2.33 * 2,
        "carbohydrates": 11.33 * 2,
        "total_sugars": 4.33 * 2,
        "added_sugars": 0,
        "total_fat": 6.67 * 2,
        "saturated_fat": 1.0 * 2,
        "trans_fat": 0,
        "cholesterol": 0,
        "sodium": 371 * 2,
        "ingredients": "Mixed vegetables, cream, cashews, spices, vegetable oil, salt"
    },
    {
        "id": 7,
        "name": "Paneer Methi Malai",
        "description": "Creamy and flavorful paneer dish.",
        "price": 150,
        "image": "paneer-methi.jpg",
        "quantity": 1,
        "how_to_cook": "Place the pouch in a pot of boiling water for 5 mins, remove contents from the pouch and heat in a pan till warm. Microwave: Remove contents from the pouch and heat in a microwave-safe dish for about 3 mins on high.",
        "pack_volume": "300g",
        "serving_size": "2 servings (150g each)",
        "energy": 295 * 2,
        "protein": 8.33 * 2,
        "carbohydrates": 16.0 * 2,
        "total_sugars": 3.67 * 2,
        "added_sugars": 0,
        "total_fat": 21.67 * 2,
        "saturated_fat": 10.67 * 2,
        "trans_fat": 0,
        "cholesterol": 37.67 * 2,
        "sodium": 370 * 2,
        "ingredients": "Paneer, cream, fenugreek leaves, spices, vegetable oil, saltLet's make sure the nutritional values and details from your images are accurately represented in the `app.py` file. Here's the complete updated `app.py`:",
    },

    {
        "id": 8,
        "name": "Paneer Tikka Masala",
        "description": "Grilled paneer in a rich and spicy masala.",
        "price": 150,
        "image": "paneer-tikka.jpg",
        "how_to_cook": "Place the pouch in a pot of boiling water for 5 mins, remove contents from the pouch and heat in a pan till warm. Microwave: Remove contents from the pouch and heat in a microwave-safe dish for about 3 mins on high.",
        "pack_volume": "300g"
    }
]

@app.route('/api/meals', methods=['GET'])
def get_meals():
    return jsonify(meals)

if __name__ == '__main__':
    app.run(debug=True)