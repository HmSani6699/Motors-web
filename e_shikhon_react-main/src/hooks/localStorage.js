// utils/localStorage.js

export const saveData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data || { items: [] }));
    const event = new Event("storageUpdated");
    window.dispatchEvent(event);
  } catch (error) {
    console.error("Error saving data to localStorage:", error);
  }
};

export const loadData = (key) => {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : { items: [] };
  } catch (error) {
    console.error("Error loading data from localStorage:", error);
    return { items: [] };
  }
};

export const deleteData = (key) => {
  try {
    localStorage.removeItem(key);
    const event = new Event("storageUpdated");
    window.dispatchEvent(event);
  } catch (error) {
    console.error("Error deleting data from localStorage:", error);
  }
};

export const deleteCartItem = (key, batchID, courseID) => {
  try {
    const data = loadData(key);
    if (data && Array.isArray(data.items)) {
      const updatedItems = data.items.filter((item) =>
        item.batch_id
          ? parseFloat(item.batch_id) !== parseFloat(batchID)
          : parseFloat(item.course_id) !== parseFloat(courseID)
      );
      saveData(key, { items: updatedItems || [] });
    } else {
      console.warn("No items found in cart for deletion.");
    }
  } catch (error) {
    console.error("Error deleting cart item:", error);
  }
};
