# teste-de-projeto-escola-
Testando Cadastro de Professores:
Comando: curl -X POST http:localhost:3001/professor -H "Content-Type: application/json" -d"{\"nome\": \"Henrique Louro\", \"email\": \"henrique.louro@fatec.sp.gov.br\", \"cpf\":\"07494812857\"}"

Resposta: {"nome":"Henrique Louro", "email":"henrique.louro@fatec.sp.gov.br", "cpf":"07494812857",
"_id":"682f6384f4bd0fb518a18a28","__v":0}


Comando: curl -X POST http://localhost:3001/professor -H "Content-Type: application/json" -d
"{\"nome\": \"Carlos Silva\", \"email\": \"carlos.silva@fatec.sp.gov.br\", \"cpf\": \" 63479695051\"}"

Resposta: {"nome":"Carlos Silva", "email":"carlos.silva@fatec.sp.gov.br", "cpf":"63479695051",
"_id":"682f6623f4bd0fb518a18a2c","__v":0}


Comando: curl -X POST http://localhost:3001/professor -H "Content-Type: application/json" -d"{\"nome\": \"Odete Roitman\", \"email\": \"odete.roitman@fatec.sp.gov.br\", \"cpf\": \"32082128016\"}"

Resposta: {"nome":"Odete Roitman", "email":"odete.roitman@fatec.sp.gov.br", "cpf":"32082128016",
"_id":"682f6b14f4bd0fb518a18a37","__v":0}


20. Testando Unique no Cadastro de Professores:
Comando: curl -X POST http://localhost:3001/professor -H "Content-Type: application/json" -d"{\"nome\": \"Henrique Louro\", \"email\": \"henrique.louro@fatec.sp.gov.br\", \"cpf\":\"07494812857\"}"


Resposta: {"message":"CPF ou e-Mail já em uso"}


21. Testando validação do CPF:
Comando: curl -X POST http://localhost:3001/professor -H "Content-Type: application/json" -d"{\"nome\": \"Henrique Louro\", \"email\": \"henrique.louro@fatec.sp.gov.br\", \"cpf\":\"12345678910\"}"


Resposta: {"message":"12345678910 não é um CPF válido"}


22. Testando validação do e-Mail:
Comando: curl -X POST http://localhost:3001/professor -H "Content-Type: application/json" -d"{\"nome\": \"Henrique Louro\", \"email\": \"henrique.louro@fatec\", \"cpf\": \"12345678910\"}"


Resposta: {"message":"henrique.louro@fatec não é um formato de e-mail válido"}


23. Listando Professores:
Comando: curl -X GET http://localhost:3001/professor


Resposta: [{"_id":"682f6384f4bd0fb518a18a28","nome":"Henrique Louro",
"email":"henrique.louro@fatec.sp.gov.br",
"cpf":"07494812857","__v":0},{"_id":"682f6623f4bd0fb518a18a2c","nome":"Carlos Silva",
"email":"carlos.silva@fatec.sp.gov.br", "cpf":"63479695051","__v":0},
{"_id":"682f6b14f4bd0fb518a18a37","nome":"Odete Roitman",
"email":"odete.roitman@fatec.sp.gov.br","cpf":"32082128016","__v":0}]


24. Update Professor:
Comando: curl -X PUT http://localhost:3001/professor -H "Content-Type: application/json" -d
"{\"id\":\"682f669ff4bd0fb518a18a2e\",\"nome\": \"Odetinha Roitman\", \"email\":
\"odetinha.roitman@fatec.sp.gov.br\", \"cpf\": \" 32082128016\"}"
Resposta: {"_id":"682f6b14f4bd0fb518a18a37","nome":"Odetinha Roitman",
"email":"odetinha.roitman@fatec.sp.gov.br", "cpf":"32082128016","__v":0}


25. Deletando Professor:
Comando: curl -X DELETE http://localhost:3001/professor -H "Content-Type: application/json" -d
"{\"id\":\"682f6b14f4bd0fb518a18a37\"}"


Resposta: {"message":"Professor excluído com sucesso"}


26. Listando Professores novamente:
Comando: curl -X GET http://localhost:3001/professor


Resposta: [{"_id":"682f6384f4bd0fb518a18a28","nome":"Henrique
Louro","email":"henrique.louro@fatec.sp.gov.br","cpf":"07494812857","__v":0},{"_id":"682f6623f4bd0fb518
a18a2c","nome":"Carlos Silva","email":"carlos.silva@fatec.sp.gov.br","cpf":"63479695051","__v":0}]


27. Testando Cadastro de Disciplinas:
Comando: curl -X POST http://localhost:3001/disciplina -H "Content-Type: application/json" -d
"{\"descricao\": \"Técnicas de Programação II\"}"


Resposta: {"descricao":"Técnicas de Programação II","_id":"682f6d0cf4bd0fb518a18a3c","__v":0}


Comando: curl -X POST http://localhost:3001/disciplina -H "Content-Type: application/json" -d
"{\"descricao\": \"Lógica de Programação\"}"


Resposta: {"descricao":"Lógica de Programação","_id":"682f6dbdf4bd0fb518a18a3e","__v":0}


28. Listando as Disciplinas:
Comando: curl -X GET http://localhost:3001/disciplina


Resposta: [{"_id":"682f6d0cf4bd0fb518a18a3c","descricao":"Técnicas de Programação
II","__v":0},{"_id":"682f6dbdf4bd0fb518a18a3e","descricao":"Lógica de Programação","__v":0}]


29. Associando Professores às Disciplinas:
Comando: curl -X POST http://localhost:3001/professor_has_disciplina -H "Content-Type:
application/json" -d "{\"professor\": \"682f6384f4bd0fb518a18a28\", \"disciplina\":\"682f6d0cf4bd0fb518a18a3c\"}"


Resposta: {"professor":"682f6384f4bd0fb518a18a28", "disciplina":"682f6d0cf4bd0fb518a18a3c",
"_id":"682f78b5f4bd0fb518a18a43","__v":0}


Comando: curl -X POST http://localhost:3001/professor_has_disciplina -H "Content-Type:
application/json" -d "{\"professor\": \"682f6623f4bd0fb518a18a2c\", \"disciplina\":\"682f6dbdf4bd0fb518a18a3e\"}"


Resposta: {"professor":"682f6623f4bd0fb518a18a2c", "disciplina":"682f6dbdf4bd0fb518a18a3e",
"_id":"682f7963f4bd0fb518a18a47","__v":0}

30. Listando Professores e Disciplinas
Comando: curl -X GET http://localhost:3001/professor_has_disciplina


Resposta:
[{"_id":"682f78b5f4bd0fb518a18a43","professor":{"_id":"682f6384f4bd0fb518a18a28","nome":"Henrique
Louro","email":"henrique.louro@fatec.sp.gov.br","cpf":"07494812857","__v":0},"disciplina":{"_id":"682f6
d0cf4bd0fb518a18a3c","descricao":"Técnicas de Programação II","__v":0}},
{"_id":"682f7963f4bd0fb518a18a47","professor":{"_id":"682f6623f4bd0fb518a18a2c","nome":"Carlos
Silva","email":"carlos.silva@fatec.sp.gov.br","cpf":"63479695051","__v":0},"disciplina":{"_id":"682f6db
df4bd0fb518a18a3e","descricao":"Lógica de Programação","__v":0}}]