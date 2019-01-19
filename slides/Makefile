
SRCS := $(wildcard *.md)
PPTX := $(SRCS:.md=.pptx)
DEPS := custom-reference.pptx

.PHONY: all

all: $(PPTX)

%.pptx : %.md $(DEPS)
	pandoc $< -o $@ --reference-doc=custom-reference.pptx