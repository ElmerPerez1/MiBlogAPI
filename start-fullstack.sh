#!/bin/bash

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Iniciando Mi Blog API - Full Stack${NC}"
echo -e "${BLUE}=====================================${NC}"

# Función para verificar si un puerto está en uso
check_port() {
    local port=$1
    if lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; then
        return 0
    else
        return 1
    fi
}

# Verificar si el backend ya está corriendo
if check_port 3900; then
    echo -e "${GREEN}✅ Backend ya está corriendo en puerto 3900${NC}"
else
    echo -e "${BLUE}🔧 Iniciando Backend API...${NC}"
    # Iniciar backend en segundo plano
    cd "$(dirname "$0")" && npm start &
    BACKEND_PID=$!
    echo -e "${GREEN}✅ Backend iniciado con PID: $BACKEND_PID${NC}"
    
    # Esperar un momento para que el backend se inicie
    sleep 3
fi
g
# Verificar si el frontend ya está corriendo
if check_port 5173; then
    echo -e "${GREEN}✅ Frontend ya está corriendo en puerto 5173${NC}"
else
    echo -e "${BLUE}🎨 Iniciando Frontend React...${NC}"
    # Iniciar frontend
    cd frontend && npm run dev &
    FRONTEND_PID=$!
    echo -e "${GREEN}✅ Frontend iniciado con PID: $FRONTEND_PID${NC}"
fi

echo -e "${BLUE}=====================================${NC}"
echo -e "${GREEN}🎉 Mi Blog está listo!${NC}"
echo -e "${GREEN}📡 Backend API: http://localhost:3900${NC}"
echo -e "${GREEN}🌐 Frontend: http://localhost:5173${NC}"
echo -e "${BLUE}=====================================${NC}"
echo -e "${RED}Para detener los servidores, presiona Ctrl+C${NC}"

# Función para limpiar procesos al salir
cleanup() {
    echo -e "\n${RED}🛑 Deteniendo servidores...${NC}"
    if [ ! -z "$BACKEND_PID" ]; then
        kill $BACKEND_PID 2>/dev/null
    fi
    if [ ! -z "$FRONTEND_PID" ]; then
        kill $FRONTEND_PID 2>/dev/null
    fi
    exit 0
}

# Configurar trap para limpiar al salir
trap cleanup SIGINT SIGTERM

# Mantener el script corriendo
wait
