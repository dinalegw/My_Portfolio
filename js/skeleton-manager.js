/**
 * Skeleton Manager - Handles skeleton loading states
 */

class SkeletonManager {
    constructor() {
        this.skeletonContainers = document.querySelectorAll('.skeleton-container');
        this.actualContents = document.querySelectorAll('.actual-content');
    }

    showSkeletons() {
        this.skeletonContainers.forEach(container => {
            container.style.display = 'block';
        });
        
        this.actualContents.forEach(content => {
            content.style.display = 'none';
        });
    }

    hideSkeletons() {
        this.skeletonContainers.forEach(container => {
            container.style.display = 'none';
        });
        
        this.actualContents.forEach(content => {
            content.style.display = 'block';
        });
    }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
    window.skeletonManager = new SkeletonManager();
    window.skeletonManager.showSkeletons();
    
    // Simulate loading delay
    setTimeout(() => {
        window.skeletonManager.hideSkeletons();
    }, 1500);
});