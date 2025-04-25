

document.addEventListener('DOMContentLoaded', () => {
    const view = InvoiceView.bind();
  
    view.addProductBtn.addEventListener('click', () => {
      InvoiceView.toggleForm(true);
    });
  
    view.closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      InvoiceView.toggleForm(false);
    });
  
    view.addBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const name = view.productNameSelect.value;
      const details = InvoiceModel.getProductDetails(name);
      const amount = InvoiceModel.calculateAmount(details.price, details.quantity);
      const item = { ...details, amount };
      InvoiceView.addInvoiceItem(item);
      InvoiceView.updateTotals();
      InvoiceView.toggleForm(false);
    });
  
    InvoiceView.onAmountPaidChange(() => {
      InvoiceView.updateTotals();
    });
  
    view.createInvoiceBtn.addEventListener('click', () => {
      alert('Invoice created successfully!');
    });
  });
  