describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update #servertable on updateServerTable()', function () {
    submitServerInfo();
    updateServerTable();

    let updateTable = document.querySelectorAll('#serverTable tbody tr td');
    expect(updateTable.length).toEqual(3);
    expect(updateTable[0].innerText).toEqual('Alice');
    expect(updateTable[1].innerText).toEqual('$0.00');

  });

  

  afterEach(function() {
    // teardown logic
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});

