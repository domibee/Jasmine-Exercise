
it('should calculate the monthly rate correctly', function () {
  // ..
  const values = {
    amount: 1000,
    years: 9,
    rate:5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('11.91');
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 25080,
    years: 4,
    rate: 2.7
  };
  expect(calculateMonthlyPayment(values)).toEqual('551.81');
});

it("should handle very high interest rates", function () {
  const values = {
    amount: 35000,
    years: 13,
    rate: 99.9
  };
  expect(calculateMonthlyPayment(values)).toEqual('2913.76')
})
