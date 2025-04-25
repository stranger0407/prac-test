

const InvoiceModel = (() => {
    let productCounter = 1;
    const getProductDetails = (name) => ({
      id: productCounter++,
      name,
      description: `Description for ${name}`,
      price: Math.floor(Math.random() * 100) + 10,
      quantity: 1,
    });
  
    const calculateAmount = (price, quantity) => price * quantity;
  
    return {
      getProductDetails,
      calculateAmount,
    };
  })();
  