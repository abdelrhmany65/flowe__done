import axios from "axios";

const BASE_URL = "http://localhost:3003"; 

// دالة لجلب جميع الـ Categories
export const fetchCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/categories`);
    console.log(response);
    return response.data; 
    // console.log(data);
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // للتعامل مع الأخطاء عند الحاجة
  }
};

