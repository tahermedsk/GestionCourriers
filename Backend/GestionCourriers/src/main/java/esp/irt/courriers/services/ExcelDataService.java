package esp.irt.courriers.services;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook; // Use XSSFWorkbook for .xlsx files
import org.springframework.stereotype.Service;
import esp.irt.courriers.entites.Direction;
import esp.irt.courriers.repository.DirectionRepository;


import javax.transaction.Transactional;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.Iterator;

@Service
public class ExcelDataService {

    private final DirectionRepository directionRepository;

    public ExcelDataService(DirectionRepository directionRepository) {
        this.directionRepository = directionRepository;
    }

    @Transactional
    public void importDataFromExcel(String filePath) throws IOException {
        System.out.println("**************  dans import");

        // Open the workbook using InputStream to handle different file formats
        try (InputStream fileInputStream = new FileInputStream(filePath)) {
            Workbook workbook;

            // Determine the workbook type based on file extension
            if (filePath.toLowerCase().endsWith(".xls")) {
                throw new IllegalArgumentException("Unsupported file format: .xls (Use .xlsx instead)");
            } else if (filePath.toLowerCase().endsWith(".xlsx")) {
                workbook = new XSSFWorkbook(fileInputStream); // For .xlsx files
            } else {
                throw new IllegalArgumentException("Unsupported file format");
            }

            Sheet sheet = workbook.getSheetAt(0); // Assuming data is in the first sheet

            Iterator<Row> rowIterator = sheet.iterator();
            while (rowIterator.hasNext()) {
                Row row = rowIterator.next();

                // Assuming the Excel columns are in a specific order (code, libelle)
                Long code = (long) row.getCell(0).getNumericCellValue();
                String libelle = row.getCell(1).getStringCellValue();

                // Create a new Direction object
                Direction direction = new Direction();
                direction.setCode(code);
                direction.setLibelle(libelle);

                // Save the direction object using JPA repository
                directionRepository.save(direction);
            }
        } catch (IOException e) {
            e.printStackTrace();
            throw e;
        }
    }
}
