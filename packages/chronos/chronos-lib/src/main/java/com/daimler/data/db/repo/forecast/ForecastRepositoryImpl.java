package com.daimler.data.db.repo.forecast;

import java.util.Optional;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.data.jpa.repository.support.SimpleJpaRepository;
import org.springframework.stereotype.Repository;

import com.daimler.data.db.entities.ForecastNsql;

import lombok.extern.slf4j.Slf4j;


@Repository
@Slf4j
public class ForecastRepositoryImpl extends SimpleJpaRepository<ForecastNsql, String> implements ForecastRepository {

	public ForecastRepositoryImpl(Class<ForecastNsql> domainClass, EntityManager em) {
		super(domainClass, em);
	}

	@PersistenceContext
	protected EntityManager em;

	@Override
	public Optional<ForecastNsql> findById(String id) {
		//change this to instead use lock
		return super.findById(id);
	}
	
	
}
