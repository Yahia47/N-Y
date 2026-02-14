export const useProjects = () => {
    const projects = ref([
        {
            id: 1,
            title: 'Nova Shop E-commerce Platform',
            description: 'Plateforme e-commerce complète',
            image: "/public/images/nova.png",
            tags: ['Laravel', 'PHP', 'Template', 'Admin Dashboard', 'Client Dashboard'],
            category: 'E-commerce',
            github: 'https://github.com/Yahia47/NovaShop',
            demo: 'https://novashop-production.up.railway.app/',
            color: '#6366f1'
        }
        // Ajouter plus de projets ici
    ])

    const getProjectById = (id: number) => {
        return projects.value.find(project => project.id === id)
    }

    const getProjectsByCategory = (category: string) => {
        if (category === 'Tous') return projects.value
        return projects.value.filter(project => project.category === category)
    }

    return {
        projects,
        getProjectById,
        getProjectsByCategory
    }
}