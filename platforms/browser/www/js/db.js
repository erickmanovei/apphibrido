/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

	
function inserir(){
	// Adiciona um elemento a tabela
	var db;
	db = window.sqlitePlugin.openDatabase({name: "DB"});
	db.transaction(function(tx) {
			// Cria a Tabela "tabela_testes"
            tx.executeSql('CREATE TABLE IF NOT EXISTS tabela_teste (id integer primary key, titulo text)');
            // Adiciona um elemento a tabela
            tx.executeSql("INSERT INTO pessoas (nome, sobrenome, cpf) VALUES (?, ?, ?)", ["Erick", "Nilson", "01819242501"]);
        });
	
}

function retorna(){
	var db;
	db = window.sqlitePlugin.openDatabase({name: "DB"});
	db.transaction(function(tx) {
	// Faz uma busca na tabela
		tx.executeSql("SELECT * FROM pessoas;", [], function(tx, res) {
			alert("Quantidade Resultados: " + res.rows.length);
			for (var i = 0;i<res.rows.length;i++){
				alert("Linha "+i+": "+res.rows.item(i).titulo);
			}
		  });
	 });
}
