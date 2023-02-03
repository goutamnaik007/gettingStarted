const XlsxPopulate = require('node_modules\\xlsx-populate');
class ReadExcelUtility {
    readTestDataFromExcel(filePath, testCaseName) {
        return XlsxPopulate.fromFile(filePath)
            .then(workbook => {
                // Access the data in the worksheet
                const worksheet = workbook.sheet("Sheet1");

                // Read the values of the entire sheet
                const allData = worksheet.usedRange().value();

                // Find the row with the matching test case name
                let testData = null;
                allData.forEach((data, index) => {
                    if (data[0] === testCaseName) {
                        testData = data;
                        return;
                    }
                });

                if (testData) {
                    return testData;
                } else {
                    throw new Error(`Test case not found: ${testCaseName}`);
                }
            });
    }
}
export default ReadExcelUtility;