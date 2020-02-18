import App from './app';

const { PORT } = process.env;

App.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});
