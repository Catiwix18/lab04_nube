# Usa la imagen base de Node.js
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código de la aplicación
COPY . .

# Expone el puerto 9000
EXPOSE 9000

# Comando para ejecutar la aplicación
CMD ["node", "app.js"]
