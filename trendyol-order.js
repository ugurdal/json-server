var faker = require("faker");
faker.locale = "tr";

function generateOrders() {
  var orders = {
    page: 0,
    size: 50,
    totalPages: 1,
    totalElements: 1,
    content: [],
  };

  for (let ix = 0; ix < 1; ix++) {
    let newOrder = {
      shipmentAddress: {
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        address1: faker.address.streetAddress(),
        address2: "",
        city: faker.address.city(),
        cityCode: 34,
        district: faker.address.state(),
        districtId: 54,
        postalCode: "10D",
        countryCode: "tr",
        neighborhoodId: 28692,
        neighborhood: "Altıntepe Mah",
        latitude: "40.976659",
        longitude: "29.126265",
        fullAddress: faker.address.streetAddress(),
        fullName: "Trendyol Müşterisi",
      },
      orderNumber: faker.datatype.number().toString(),
      grossAmount: faker.datatype.float(20, 100),
      totalDiscount: 0.0,
      taxNumber: null,
      invoiceAddress: {
        id: faker.datatype.number(),
        firstName: faker.name.firstName(),
        lastName: "Müşterisi",
        company: "",
        address1: faker.address.streetAddress(),
        address2: "",
        city: " İstanbul ",
        cityCode: 34,
        district: "Şişli",
        districtId: 54,
        countryCode: "tr",
        neighborhoodId: 28692,
        neighborhood: "Altıntepe Mah",
        fullAddress: faker.address.streetAddress(),
        fullName: "Trendyol Müşterisi",
      },
      customerFirstName: faker.name.firstName(),
      customerEmail: faker.internet.email(),
      customerId: 19935197,
      customerLastName: "Müşterisi",
      id: faker.datatype.number(),
      orderId: faker.datatype.number(),
      cargoTrackingNumber: faker.datatype.number().toString(),
      cargoTrackingLink: "https://hizligonderitakip.trendyol.com/?uuid=",
      cargoSenderNumber: "1693850",
      cargoProviderName: "Trendyol Kurye",
      lines: [],
      orderDate: 1609932842448,
      tcIdentityNumber: "99999999999",
      currencyCode: "TRY",
      packageHistories: [
        {
          createdDate: 1609923815295,
          status: "Delivered",
        },
        {
          createdDate: 1609922045130,
          status: "Created",
        },
        {
          createdDate: 1609923141854,
          status: "Picking",
        },
        {
          createdDate: 1609923205175,
          status: "Shipped",
        },
      ],
      instantTimeSlotId: "string",
      eta: "string",
      scheduleType: "string",
      deliveryModel: "string",
      zoneId: "ABC",
      shipmentPackageStatus: "Delivered",
      deliveryType: "instant",
      scheduledDeliveryStoreId: "123",
      estimatedDeliveryStartDate: 1609922043778,
      estimatedDeliveryEndDate: 1609925643778,
      totalPrice: faker.datatype.float(20, 100),
    };

    for (let y = 0; y < Math.random() * 3; y++) {
      let amount = faker.datatype.float(20.0);
      console.log(amount);
      let quantity = Math.ceil(Math.random() * 5);

      newOrder.lines.push({
        packageItemIds: [""],
        lineItemIds: [""],
        quantity: quantity,
        salesCampaignId: 517758,
        productSize: "Tek Ebat",
        merchantSku: "merchantSku",
        productName: "A.B.Bahçesınden Organik Yumurta 10'lu 81236, one size",
        productCode: 82704357,
        merchantId: 111222,
        amount: amount * quantity,
        discount: 0,
        discountDetails: [
          {
            lineItemPrice: 18.99,
            lineItemDiscount: 0,
          },
        ],
        currencyCode: "TRY",
        id: 611374254,
        sku: "8681105069134",
        vatBaseAmount: 8.0,
        barcode: "8681105069134",
        orderLineItemStatusName: "Delivered",
        price: amount * quantity,
      });
    }

    orders.content.push(newOrder);
    orders.totalElements = orders.content.length;
  }

  return { orders };
}

module.exports = generateOrders;
