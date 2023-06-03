Passos

instalar o docker
npm init -y (para iniciar com algumas informações)
instalar o express
instalar o mysql2
instalar o nodemon (npm install nodemon -D)
    -> O nodemon é interessante pois qualquer alteração no codigo será atualizado, sem precisar para o start e recomeçar
    -> basta colocar no package.json, dentro de script: `"dev": "nodemon src/index.js"`
instalar o dotenv
npx eslint --init (para fazer configurações do eslint)


Colocar em package.json dentro de script: `"start": "node src/index.js",`
