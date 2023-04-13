# Utilisez l'image nginx comme base
FROM nginx

# Supprimez le fichier de configuration nginx par défaut
RUN rm /etc/nginx/conf.d/default.conf

# Copiez votre fichier de configuration nginx personnalisé
COPY nginx.conf /etc/nginx/conf.d/

# Copiez tous les fichiers HTML, CSS et JavaScript dans le dossier /usr/share/nginx/html
COPY . /usr/share/nginx/html

# Exposez le port 80 pour le serveur web
EXPOSE 80

# Commande pour démarrer le serveur web
CMD ["nginx", "-g", "daemon off;"]
