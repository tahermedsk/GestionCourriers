package esp.irt.courriers.services;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.transaction.Transactional;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import esp.irt.courriers.entites.Direction;
import esp.irt.courriers.repository.DirectionRepository;

@Service
public class ExcelDataService {

    private final DirectionRepository directionRepository;
    
    public ExcelDataService(DirectionRepository directionRepository) {
        this.directionRepository = directionRepository;
    }

    @Transactional
    public void importDataFromExcel(String filePath) throws IOException, EncryptedDocumentException, InvalidFormatException {
        System.out.println("**************  dans import");
        
        // Validate file path
        if (filePath == null || !filePath.toLowerCase().endsWith(".xlsx")) {
            throw new IllegalArgumentException("Invalid file path or unsupported file format: .xlsx is expected");
        }

        try (InputStream fileInputStream = new FileInputStream(new File(filePath))) {
            System.out.println("lign 41");

            try(Workbook workbook = WorkbookFactory.create(fileInputStream)){
                System.out.println("lign 44");

            Sheet sheet = workbook.getSheetAt(0); // Assuming data is in the first sheet
            System.out.println("lign 44");
            for (Row row : sheet) {
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
            workbook.close();}
            
        } catch (IOException e) {
            System.err.println("Error importing data from Excel: " + e.getMessage());
            throw e;
        }
    }
}
