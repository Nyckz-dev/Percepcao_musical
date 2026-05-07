import pygame

pygame.init()
print("Versão do pygame:", pygame.version.ver)

# cria uma janela simples
screen = pygame.display.set_mode((400, 300))
pygame.display.set_caption("Teste Pygame")

running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

pygame.quit()
