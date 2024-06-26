 async function fetchProfileData() {

   const url = "https://raw.githubusercontent.com/mfjaconis/js-developer-portfolio/main/data/profile.json";

   try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Erro ao carregar os dados');
    }

    const data = await response.json();

    return data;
} catch (error) {
    console.error('Erro ao buscar dados do perfil:', error);

    return null;
}
 }