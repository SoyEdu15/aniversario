# Usar una imagen oficial de Node.js ligera
FROM node:20-alpine

# Crear directorio de trabajo de la app
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias del proyecto (incluye nodemon y express)
RUN npm install

# Copiar el resto del código fuente del proyecto
COPY . .

# Exponer el puerto en el que corre la aplicación
EXPOSE 3000

# Variable de entorno para indicar producción
ENV NODE_ENV=production

# Comando para iniciar la aplicación (usa el script de inicio de npm)
CMD [ "npm", "start" ]
