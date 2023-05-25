/* LICENSE START
 * 
 * MIT License
 * 
 * Copyright (c) 2019 Daimler TSS GmbH
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 * LICENSE END 
 */

package com.daimler.dna.notifications.comparison.event.config;

import com.daimler.data.service.forecast.ForecastService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.stereotype.Service;

import com.daimler.dna.notifications.common.event.config.GenericEventRecord;
import com.daimler.dna.notifications.common.producer.KafkaDynamicProducerService;

//@Service
//public class KafkaComparisonEventListner {
//
//	private static Logger LOGGER = LoggerFactory.getLogger(KafkaComparisonEventListner.class);
//
//	@Autowired
//	private KafkaDynamicProducerService dynamicProducer;
//
//	@Value("${kafka.comparisonTopic.name}")
//	private String dnaChronosComparisonTopicName;
//
//	@Autowired
//	private ForecastService service;
//
////	@KafkaListener(topics = "dnaChronosComparisonEventTopic")
////	public void chronosComparisonTopicListnerToProcess(GenericEventRecord message) {
////		if (message != null) {
////			service.processForecastComparision(message.getResourceId(),message.getMessageDetails());
////			//call forecastservice processcomparison (forecast id is resourceid from GenericEventRecord and comparision id is messageDetails from GenericEventRecord)
////
////		}
////	}
//
//}
