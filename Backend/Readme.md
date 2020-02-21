

## API desenvolvida com as tecnologias:

- NodeJs.
- Express.
- Postgres.
- RedisDB.
- Nodemailer.
- Entre outros...


## Instalação



> Precisamos instalar o Postgres e o redis

##### Criando uma instancia do Postgres com  DOCKER: 🐋

```
$ docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```


- Para os background Jobs foi utilizado o Redis

##### Criando uma instancia do Redis com DOCKER: 🐋

```
$ docker run --name some-redis -d redis
```

> Depois de todos os bancos instalados no docker, coloque os ONLINE

```
$ docker start "CONTAINER DOCKER ID"
```


Adicionando Repositorios:

```sh
yarn
```

Criando o DB

```
yarn sequelize db:create

```


Rodando as migration para cria as tabelas no banco:

```js
yarn sequelize db:migrate

```

Rodando o Seeds para povoar a tabela com o usuario admin:

```
yarn sequelize db:seed:all
```



Apos isso tera acesso com o usuario:

>admin@fastfeet.com
>senha:123456



> crie na raiz o arquivo .env e replique os dados do .envExemple, preenchendo com os dados dos seus DB.

Iniciando o app:

```sh
yarn dev
yarn queue
```



## Criado por:

Fernando Santos – [@Fernando](https://www.linkedin.com/in/fernando-santos-686632122/) – fernandorato.0@hotmail.com

Faz Parte do bootcamp GoStack 9 da [RocketSeat](https://rocketseat.com.br/bootcamp)



## Contributing

1. Faça o _fork_ do projeto
2. Crie uma _branch_ para sua modificação (`git checkout -b feature/gobarber`)
3. Faça o _commit_ (`git commit -am 'Add some feature'`)
4. _Push_ (`git push origin feature/gobarber`)
5. Crie um novo _Pull Request_

