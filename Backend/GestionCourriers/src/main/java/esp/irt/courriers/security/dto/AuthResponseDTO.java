package esp.irt.courriers.security.dto;

import lombok.Data;

@Data
public class AuthResponseDTO {
    private String accessToken;
//    private String refreshToken;
//    private String tokenType = "Bearer ";

    public AuthResponseDTO(String accessToken) {
        this.accessToken = accessToken;
//        this.refreshToken = refreshToken;
    }
}

