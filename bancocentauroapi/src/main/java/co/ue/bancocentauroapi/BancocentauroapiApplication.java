package co.ue.bancocentauroapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EntityScan(basePackages = {"co.ue.infrastructure.model"})
@EnableJpaRepositories(basePackages = {"co.ue.infrastructure.dao"})
@ComponentScan(basePackages = {"co.ue.application.service", "co.ue.infrastructure.controller",
  "co.ue.infrastructure.dao", "co.ue"})
public class BancocentauroapiApplication {

	public static void main(String[] args) {
		SpringApplication.run(BancocentauroapiApplication.class, args);
	}

}
