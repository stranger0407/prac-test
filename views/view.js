

const InvoiceView = (() => {
  const selectors = {
    addProductBtn: document.getElementById('add-btn'),
    productForm: document.getElementById('form'),
    addBtn: document.getElementById('btn-add'),
    closeBtn: document.getElementById('btn-close'),
    productNameSelect: document.getElementById('product-name'),
    invoiceList: document.querySelector('.invoice-list'),
    totalAmountInput: document.querySelector('.total-amount input'),
    amountPaidInput: document.querySelector('.amount-paid input'),
    balanceDueInput: document.querySelector('.balance-due input'),
    createInvoiceBtn: document.getElementById('btn-create'),
    displayInvoice: document.querySelector('.display-invoice'),
  };

  const toggleForm = (visible) => {
    selectors.productForm.style.display = visible ? 'block' : 'none';
  };

  const addInvoiceItem = (item) => {
    const invoiceItem = document.createElement('div');
    invoiceItem.className = 'invoice-item';
    invoiceItem.innerHTML = `
      <span class="id">${item.id}</span>
      <span class="name">${item.name}</span>
      <span class="description">${item.description}</span>
      <span class="price">${item.price}</span>
      <span class="quantity">${item.quantity}</span>
      <span class="amount">${item.amount}</span>
    `;

    if (!selectors.invoiceList) {
      const newInvoiceList = document.createElement('div');
      newInvoiceList.className = 'invoice-list';
      selectors.displayInvoice.appendChild(newInvoiceList);
      newInvoiceList.appendChild(invoiceItem);
    } else {
      selectors.invoiceList.appendChild(invoiceItem);
    }
  };

  const updateTotals = () => {
    const amounts = document.querySelectorAll('.invoice-item .amount');
    let total = 0;
    amounts.forEach(el => total += parseFloat(el.textContent));
    selectors.totalAmountInput.value = total.toFixed(2);

    const paid = parseFloat(selectors.amountPaidInput.value || 0);
    selectors.balanceDueInput.value = (total - paid).toFixed(2);
  };

  const onAmountPaidChange = (callback) => {
    selectors.amountPaidInput.addEventListener('input', callback);
  };

  const bind = () => selectors;

  return {
    bind,
    toggleForm,
    addInvoiceItem,
    updateTotals,
    onAmountPaidChange,
  };
})();
